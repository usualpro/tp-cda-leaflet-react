import { observable, computed } from 'mobx';
class CountStore {
    @observable count: number = 0;
    @computed get currentCount (): number {
        return this.count;
    };

    increment = (): void => {
        this.count += 1;
    };

    decrement = (): void => {
        this.count -= 1;
    };
}
export default new CountStore();
