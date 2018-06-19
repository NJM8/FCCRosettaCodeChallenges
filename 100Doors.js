// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

function getFinalOpenedDoors (numDoors) {
  let doors = Array(numDoors).fill(0)
  let visitStep = 1
  while (visitStep < numDoors + 1) {
    toggleDoors(doors, visitStep)
    visitStep++
  }
  return doors.reduce((res, door, index) => {
    if (door === 1) {
      res.push(index + 1)
    }
    return res
  }, [])
}

function toggleDoors(doors, step) {
  for (let i = step - 1; i < doors.length; i += step) {
    doors[i] === 0 ? doors[i] = 1 : doors[i] = 0
  }
  return doors
}


console.log(getFinalOpenedDoors(100))
console.log('Expected: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]')
