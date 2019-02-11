let source = {
    name: "root",
    weight: 10,
    children: [
        {
            name: "one",
            weight: 1,
            children: [
                {
                    name: "one-one",
                    weight: 11,
                    children: [
                        {
                            name: "one-one-one",
                            weight: 111,
                            children: []
                        },
                        {
                            name: "one-one-two",
                            weight: 112,
                            children: []
                        },
                        {
                            name: "one-one-three",
                            weight: 113,
                            children: []
                        }
                    ]
                },
                {
                    name: "one-two",
                    weight: 12,
                    children: []
                }
            ]
        },
        {
            name: "two",
            weight: 2,
            children: [
                {
                    name: "two-one",
                    weight: 21,
                    children: []
                },
                {
                    name: "two-two",
                    weight: 22,
                    children: []
                }
            ]
        }
    ]
}

// for (let key in source) {
//     console.log(source[key]);
// }


// const getWeight = item => {
//     if(item.children.length === 0){
//         return item.weight;
//     } else {
//         item.children.foreach(element => {
//             return element.weight + getWeight(element.children);
//         });
//     }  
// }
//  getWeight(source);

let getWeight = source => {		
  let weight = source.weight 
  for (let i=0; i<source.children.length; i++){
      console.log(source.name);
     weight += getWeight(source.children[i]);
  }
  return weight;
}
console.log(getWeight(source));








