import tagListModel from "@/models/tagListModel";

const tagStore:TagStore = {
    tagList: tagListModel.fetch(),
    addTag: (name) => {
        return tagListModel.add(name)
    },
    removeTag: (id) => {
        return tagListModel.remove(id)
    },
    updateTag: (id, name) => {
        return tagListModel.update(id, name)
    },
    findTag: (id) => {
        return tagListModel.find(id)
    }
}

export default tagStore