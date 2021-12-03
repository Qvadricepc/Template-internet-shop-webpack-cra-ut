function calculateDamage(yourType, opponentType, attack, defense){
    let effectiveness = 1;
    if(yourType === 'fire' &&  opponentType === 'grass'){
        effectiveness = 2;
    }
    else if(yourType === 'fire' &&  opponentType === 'water'){
        effectiveness = 0.5;
    }
    else if(yourType === 'water' &&  opponentType === 'fire'){
        effectiveness = 2;
    }
    else if(yourType === 'water' &&  opponentType === 'grass'){
        effectiveness = 0.5;
    }
    else if(yourType === 'water' &&  opponentType === 'electric'){
        effectiveness = 0.5;
    }
    else if(yourType === 'grass' &&  opponentType === 'water'){
        effectiveness = 2;
    }
    else if(yourType === 'grass' &&  opponentType === 'fire'){
        effectiveness = 0.5;
    }
    else if(yourType === 'electric' &&  opponentType === 'water'){
        effectiveness = 2;
    }
    else if(yourType === opponentType){
        effectiveness = 0.5;
    }
    return 50 * (attack / defense) * effectiveness;
}

console.log(calculateDamage('fire', 'water', 100, 100) === 25)
console.log(calculateDamage('water', 'fire', 100, 100) === 100)
console.log(calculateDamage('fire', 'grass', 100, 100) === 100)
