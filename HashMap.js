class HashMap{
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity
        this._deleted = 0;
    }

    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
        //checks whether the load ratio is greater than the given maximum
            this._resize(this._capacity * HashMap.SIZE_RATIO);
            //If so it resizes the hash map using the private _resize() function
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
            //adds an object to the array containing the key/value pair
        }; 
    }
    delete(key) {
        // Do not actually delete the item at all, and just put a deleted marker in the slot. 
        // Then on resize you can actually clear out all of the deleted items.
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }
    _findSlot(key) {
        //used to find the correct slot for a given key
        const hash = HashMap._hashString(key);
        //calculate the hash of the key
        const start = hash % this._capacity;
        //uses the modulus to find a slot for the key within the current capacity

        for (let i=start; i<start + this._capacity; i++) {
            //loops through the array, stopping when it finds the slot with a matching key or an empty slot
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }
    _resize(size) {
        //'resize' is a misnomer
        //recreate the hash map from scratch with larger capacity
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }
    static _hashString(string) {
        //takes a string and hashes it, outputting a number. 
        let hash = 5381;
        for (let i=0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeCodeAt(i);
            hash = hash + hash
        }
        return hash >>> 0;
    }
}

module.exports = HashMap