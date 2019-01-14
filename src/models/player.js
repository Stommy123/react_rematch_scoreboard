import playerData  from '../data/playerData';

const date = new Date()
const day = date.getDate()
const month = date.getMonth() +  1
const year = date.getFullYear()

export const player = {
    state: playerData,
    reducers: {
        addPlayer: (state, payload) => {
            const newPlayer = {
                id: state.players.length,
                name: payload,
                score: 0,
                created: `${month}/${day}/${year}`
            }
            const addPlayerList = [...state.players, newPlayer]
            return {
                ...state,
                players: addPlayerList
            }
        },
        removePlayer: (state, payload) => {
            const removePlayerList = state.players.filter(player => player.id !== payload)
            return {
                ...state,
                players: removePlayerList
            }
        },
        updatePlayerScore: (state, payload) => {
            const updatedPlayerList = state.players.map(player => player.id === payload.id ? 
                    {
                        ...player,
                        score: player.score + payload.score,
                        updated: `${month}/${day}/${year}`
                    }
                    : player
            )
            return {
                ...state,
                players: updatedPlayerList
            }
        },
        selectPlayer: (state, payload) => ({
            ...state,
            selectedPlayerIndex: payload
        })
    },
}
