const localStorageKeyName = 'version'

const versionModel = {
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    },
    save(newData: Version) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(newData))
    }
}

export default versionModel;