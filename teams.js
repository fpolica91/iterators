const footballTeams = {
  allTeams: {
    la_liga: [
      {name:'Barcelona', points: 65}, 
      {name:'Real Madrid', points: 63},
      {name:'Atletico Marid', points: 66}
    ],
    bundesliga: [
      {name:'Bayern Munchen', points: 65}, 
      {name:'Borussia Dormount', points: 63},
      {name:'Borussia Mönchengladbach', points: 66}
    ],
    serie_a: [
      {name:'Juvents', points: 65}, 
      {name:'Napoli', points: 63},
      {name:'Inter Milan', points: 66}
    ],
  },
   

  [Symbol.iterator](){
    const leagues = Object.values(this.allTeams)
    let currentLeagueIndex = 0;
    let currentTeamIndex = 0;
    return{ 
      next(){
        const teamsInCurrentLeague = leagues[currentLeagueIndex]
        const noMoreTeamsInLeague = !(currentTeamIndex < teamsInCurrentLeague.length)
        if(noMoreTeamsInLeague){
          currentLeagueIndex++;
          currentTeamIndex = 0;
        }

        const noMoreLeagues = !(currentLeagueIndex < leagues.length)

        if(noMoreLeagues){
          return {
            value: undefined, 
            done: true
          }
        }

        return{
          value: leagues[currentLeagueIndex][currentTeamIndex++],
          done: false
        }
      }
    }
  } 
}

for(let team of footballTeams){
  // console.log({
  //   name: team.name, 
  //   points: team.points
  // })
  console.table(team)
}

/**
 * leagues.length is 3
 * teamsInCurrentLeague.length is the length of each inner array
 * 
 */
 
// [
//   [
//     { name: 'Barcelona', points: 65 },
//     { name: 'Real Madrid', points: 63 },
//     { name: 'Atletico Marid', points: 66 }
//   ],
//   [
//     { name: 'Bayern Munchen', points: 65 },
//     { name: 'Borussia Dormount', points: 63 },
//     { name: 'Borussia Mönchengladbach', points: 66 }
//   ],
//   [
//     { name: 'Juvents', points: 65 },
//     { name: 'Napoli', points: 63 },
//     { name: 'Inter Milan', points: 66 }
//   ]
// ]



 module.exports = footballTeams