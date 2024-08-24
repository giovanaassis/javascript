const player = {
    name: 'Neymar',
    position: 'Midfield',
    age: 33
};

const putOnThePitch = (player) => {
    console.log(`${player.name} is playing!`)
};


const info = {
    player: player,
    onThePitch: putOnThePitch
};


export default info;