import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '只支持 POST 请求' });
  }

  const { url } = req.body;
  const filePath = path.resolve('./', 'redirect.json');

  fs.writeFile(filePath, JSON.stringify({ url }, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: '写入失败' });
    }
    res.status(200).json({ message: '跳转链接已更新' });
  });
}
