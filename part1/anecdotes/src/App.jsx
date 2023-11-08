import { useState } from 'react'

const getRandomNumber = (m,M) => {return(m + (Math.floor(Math.random()*M)))}

const Button = (props) => {

		return(<>	<button onClick = {() => props.func(props.votesNum)} > {props.text} </button> </>)
}
const QuoteComponent = ({anecdotes,votes}) => {

	const upvote = (v) => {
		v[selected] += 1 
		setVoted((voted+1)%2)
	}

  	const [selected, setSelected] = useState(0)
  	const [voted, setVoted] = useState(0)
	return(
	      <div>
		{anecdotes[selected]}
		<div>
			<button onClick = {() => {setSelected(Math.floor(Math.random()*anecdotes.length))}}> Random Quote</button>
			<button onClick = {() => {setSelected( (selected + 1 ) % anecdotes.length)}} > Next Quote </button>
			<button onClick = {() => {setSelected( (anecdotes.length + selected -1)%anecdotes.length )}} > Prev Quote </button>
			<button onClick = {() => {votes[selected] += 1; setVoted((voted+1)%2)}} > UP Vote </button>
			<button onClick = {() => {votes[selected] -= 1; setVoted((voted+1)%2) }} > DOWN Vote </button>
			<button onClick = {() => {
				votes[selected] -= 1
				votes[selected]=(Math.abs(votes[selected])+votes[selected])/2
				setVoted((voted+1)%2) }
			} > DOWN to zero Vote </button>

			{/* This las button is just to test whether I could pass functions and arguments, and surprisingly, they are mutated ...
				But, then I do not understand why the votes is not updated in the App component! */}
			< Button func={upvote}  votesNum={votes} text="Upvote as function" />

	      </div>
		< ShowVotes votes={votes} selected={selected}/>

	      <div>
		< ShowMostVoted anecdotes={anecdotes} votes={votes} />
	      </div>
	      </div>
	    )


}

const ShowVotes = ({votes,selected}) => {

 	//console.log(votes)
	return(<p>N of votes: {votes[selected]}</p>)
}
const ShowMostVoted = ({anecdotes,votes}) =>{
	let maxVotes = 0
	let maxVotesPos = 0

	for(let idx=0;idx<anecdotes.length;idx++){
		if(votes[idx]>maxVotes){
			maxVotes=votes[idx]
			maxVotesPos=idx
		}
	}
	console.log("Max Number of votes",maxVotes)
	console.log("Max Number of votes position",maxVotesPos)
	return(<>
		<h2>Most voted comment</h2>
		{anecdotes[maxVotesPos]}
		</>)
}
const App = () => {
	  const anecdotes = [
		      'If it hurts, do it more often.',
		      'Adding manpower to a late software project makes it later!',
		      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		      'Premature optimization is the root of all evil.',
		      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		      'The only way to go fast, is to go well.'
		    ]
	   
	  const votes = new Array(anecdotes.length)
	  votes.fill(0)
	  //console.log(votes)
	// The exercise recomend to copy the array before modification, I guess because they are mutable, but in this case they are passed by value and copied within the function component. Also, I haven't put the array as state of the component but make a state that change every time a vote button is clicked
	// It may be my use of other prog. languages, but I feel hand tied from not being able to return variables ...
	// This make me use a single component rather than "passing" variables as in C or Python
	return(<> < QuoteComponent anecdotes  = {anecdotes} votes={votes} />
		{/* {console.log(votes)} */}
		<p>The end </p>
		</>)

}

export default App
