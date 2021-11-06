module.exports = {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    "@semantic-release/npm",
    ["@semantic-release/git",
    {
      "assets": ['CHANGELOG.md', 'dist/**'],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    "@semantic-release/github"

  ]
}
