// Code your solution here
function findMatching(drivers, name){
 return  drivers.filter(driver => name.toLowerCase() === driver.toLowerCase() )
  
}

const fuzzyMatch = (drivers, names) => {
    const namesLength = names.length;
    return drivers.filter(a => {
        return a.slice(0,namesLength) === names;
    })
} 

const matchName = (drivers, names) => {
    return drivers.filter(q => {
        return q.name === names;
    })
}