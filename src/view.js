class view {
    data;
    container = document.querySelector(".question");

    clear() {
        this.container.innerHTML = "";
    }

    render(data) {
        this.data = data;
        console.log(this.data);
    }
}

export default new view();