let array = [1,2,4,5,3,3,6,3,7,4]

class LinkedList {
    constructor(head){
        this.head = head;
    }
    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    printValues(){
        let node = this.head;
        while (node) {
            console.log(node.value)
            node = node.next
        }
    }
    listPartion(part){
        let node = this.head;
        while (node) {
            if (node.next.value > part){
                node.next = node.next.next;
            }
        }
    }
}

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

function linkedListCreator(array){
    let headNode = new Node(array[0])//creates the first node out of the loop to initialise the original object
    let currentNode = headNode; //reference to original object that can be changed
    for (let i = 1; i<array.length;i++){
        currentNode.next = new Node(array[i]) //creates next node in list
        currentNode = currentNode.next //sets the next node to the current one for the next iteration
    }
    let list = new LinkedList(headNode)
    console.log(list)
    list.printValues()
    
}


linkedListCreator(array)




















// class FamilyMembers{
//     constructor(name,parents){
//         this.name = name
//         this.parents = parents
//     }

//     printParents(){
//         for (var parent in this.parents){
//             console.log(this.parents[parent])
//         }
//     }
// }

// let bart = new FamilyMembers('Bart',[])
// bart.printParents()




// let m_grandmother = {
//     name:'Jacqueline'
// }

// let m_grandfather = {
//     name:'Clancy'
// }

// let d_grandmother = {
//     name: 'Mona'
// }

// let d_grandfather = {
//     name: 'Abe'
// }

// let father = {
//     name:'Homer',
//     parents:[d_grandfather, d_grandmother],
//     printParents: function(){
//         for (var parent in this.parents){
//             console.log(this.parents[parent])
//         }
//     }
// }


// let mother = {
//     name: 'Marge',
//     parents: [m_grandfather, m_grandmother],
//     printParents: function(){
//         for (var parent in this.parents){
//             console.log(this.parents[parent])
//         }
//     }
// }

// let daughter1 = {
//     name: 'Lisa',
//     parents: [father, mother],
//     printParents: function(){
//         for (var parent in this.parents){
//             console.log(this.parents[parent])
//         }
//     }
// }

// let daughter2 = {
//     name:'Maggie',
//     parents: [father, mother],
//     printParents: function(){
//         for (var parent in this.parents){
//             console.log(this.parents[parent])
//         }
//     }
// }

// let son = {
//     name: 'Bart',
//     parents: [father,mother],
//     printParents: function(){
//         for (var parent in this.parents){
//             console.log(this.parents[parent])
//         }
//     }
// }


