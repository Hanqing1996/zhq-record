import recordStore from "./recordStore";
import tagStore from './tagStore'

const store2 = {
    ...recordStore,
    ...tagStore
}

export default store2