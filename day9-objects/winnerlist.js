const winnerlist = [
    {sesson: '1990-00', team: 'Real Madrid', country: 'Spain'},{sesson: '2000-01', team: 'Bayrean Munich', country: 'Germany'},{sesson: '2001-02', team: 'Real Madrid', country: 'Spain'},{sesson: '2002-03', team: 'Milan', country: 'Italy'},{sesson: '2003-04', team: 'Parto', country: 'Portugal'}]

function findWinnerList(winnerlist, country){
    let count = 0
    // winnerlist.forEach(function(winner){
    //     if(winner.country == country){
    //         count++;
    //     }
    // })
    count = winnerlist.filter(function(winner){
        return winner.country == country
    })
    return count.length;
}

const country = 'Italy'
console.log(findWinnerList(winnerlist, country))