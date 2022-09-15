import { Observable } from "rxjs/internal/observable"

var observable = new Observable((observer: any) => {
    try {
        observer.next("Hey guys")
        observer.next("How are you?")
        setInterval(() => (
            observer.next("I am good")
        ), 2000)
    } catch(e) {
        observer.error(e)
    }
})

var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error) => addItem(error),
    () => addItem('/end/')
)

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x: any) => addItem('Subscriber 2: ' + x), 
    )
}, 1000);

function addItem(input: any) {
    var node = document.createElement("li")
    var text = document.createTextNode(input)
    node.appendChild(text)
    document.getElementById("output").appendChild(node)
}