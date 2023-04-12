set -e

version=$1
if [[ -z $1 ]]; then
	echo "请输入版本号, 如: 1.0"
	exit 1
fi

git tag $version-test
git push origin $version-test