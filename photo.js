class Photo {
  constructor() {
    this.id = id || date.now;
    this.title = title; 
    this.caption = caption; 
    this.quantity = quantity;
  }

  setToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this));
  };

  deleteFromStorage() {
    localStorage.removeItem(this.id);
  };

  updateStorage() {

  }
};
