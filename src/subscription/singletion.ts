let AppDataInstance: any

class SubscriptionSingleton {
    value: any = [];
    constructor() {
        if (AppDataInstance) {
          throw new Error("You can only create one instance!");
        }
        AppDataInstance = this;
    }

    push(newValue: any) {
        const findEndPoint = this.value.find((ele: any) => ele.endpoint === newValue.endpoint)
        if (!findEndPoint) this.value.push(newValue)
        // this.value.push(newValue)
    }

    getAll() {
        return this.value
    }
}

const SUBSCRIPTION = new SubscriptionSingleton()

export default SUBSCRIPTION;
