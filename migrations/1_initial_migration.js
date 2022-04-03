const Migrations = artifacts.require("Migrations")
const Article = artifacts.require("Article")

module.exports = function (deployer) {
	deployer.deploy(Migrations)
	deployer.deploy(Article)
}
