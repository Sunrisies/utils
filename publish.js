#!/usr/bin/env node
const { exec } = require('child_process');
const { promisify } = require('util');
const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');

// 将 exec 转换为 Promise
const execAsync = promisify(exec);

// 封装 runCommand 函数，返回 Promise
async function runCommand(command) {
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) {
      console.warn(`命令 ${command} 的标准错误输出:`, stderr);
      throw new Error(stderr);
    }
    console.log(`命令 ${command} 执行成功:`, stdout);
    return stdout;
  } catch (error) {
    console.error(`执行命令 ${command} 时出错:`, error);
    throw error;
  }
}

// 回退版本函数
function revertVersion() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const versionParts = packageJson.version.split('.').map(Number);

    if (versionParts.length !== 3 || versionParts.some(isNaN)) {
      throw new Error('package.json 中的版本号格式不正确');
    }

    if (versionParts[2] > 0) {
      versionParts[2]--; // 回退 patch 版本号
    } else if (versionParts[1] > 0) {
      versionParts[1]--; // 如果 patch 版本为 0，回退 minor 版本号
      versionParts[2] = 9; // 重置 patch 版本号为 9
    } else if (versionParts[0] > 0) {
      versionParts[0]--; // 如果 minor 版本为 0，回退 major 版本号
      versionParts[1] = 9; // 重置 minor 版本号为 9
      versionParts[2] = 9; // 重置 patch 版本号为 9
    } else {
      throw new Error('无法回退版本，当前版本已经是 0.0.0');
    }

    packageJson.version = versionParts.join('.');
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`版本回退成功，当前版本为 ${packageJson.version}`);
  } catch (error) {
    console.error('回退版本失败:', error);
    throw error;
  }
}

// 检查并清理 dist 目录
function cleanDistDirectory() {
  const distPath = path.join(process.cwd(), 'dist');
  const allowedFiles = ['index.d.ts', 'index.esm.js']; // 允许保留的文件

  try {
    if (!fs.existsSync(distPath)) {
      throw new Error('dist 目录不存在');
    }

    const files = fs.readdirSync(distPath);
    files.forEach((file) => {
      if (!allowedFiles.includes(file)) {
        const filePath = path.join(distPath, file);
        fs.unlinkSync(filePath); // 删除多余的文件
        console.log(`已删除文件: ${filePath}`);
      }
    });

    console.log('dist 目录清理完成');
  } catch (error) {
    console.error('清理 dist 目录失败:', error);
    throw error;
  }
}

// 主函数
async function main() {
  try {
    // 清理 dist 目录
    await cleanDistDirectory();

    // 更新版本号
    await runCommand('npm version patch');

    // 设置 npm 注册表
    await runCommand('npm config set registry=https://registry.npmjs.org/');

    // 获取当前注册表（用于验证）
    await runCommand('npm config get registry');

    // 发布到 npm
    const child = spawn('npm', ['publish'], { stdio: 'inherit' });

    // 监听发布结果
    child.on('close', async (res) => {
      if (res === 0) {
        console.log('上传成功');
        // 切换回淘宝镜像
        await runCommand('npx nrm use taobao');
      } else {
        console.log('上传失败，尝试回退版本');
        try {
          await revertVersion();
        } catch (error) {
          console.error('版本回退失败，请手动处理');
        }
      }
    });
  } catch (error) {
    console.error('脚本执行失败:', error);
    process.exit(1); // 退出并返回错误码
  }
}

// 执行主函数
main();
