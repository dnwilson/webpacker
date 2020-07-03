const { execSync } = require('child_process')

export default function gem(name) {
  const root = execSync(`bundle show ${name}`).toString().trim()

  return `${root}/app/javascript`
}
