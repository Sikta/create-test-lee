const fse = require('fs-extra')
const path = require('path')

const packageJson = {
  name: 'test-package-name',
  version: '1.1.1',
  private: true
}

const args = process.argv.slice(1)
const root = path.dirname(args[0])
const dir = path.join(root, args[1])

if (!fse.existsSync(dir)) {
  fse.mkdirSync(dir)
}

const filepath = path.join(dir, 'package.json')

fse.writeFileSync(filepath, JSON.stringify(packageJson, null, 2))
