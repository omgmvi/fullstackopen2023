import { useState } from 'react'

const Title = () => {
    return( 
	<>
            <h1>Give feedback</h1>
	</>
    )
}
const count = (arr) =>{
		return(arr.reduce( (r,x) => r +x,0))
}

const punctuation = (counts,scores) => {
	let sum = 0

	for(var idx = 0; idx < counts.length; idx++){
		sum += counts[idx] * scores[idx]
	}
	return(sum)

}
const average = (counts, scores) => {
	var sum = 0 
	var total = count(counts)

	if(total == 0 ){return (0)}
	//else
	sum = punctuation(counts, scores)
	return ((sum/total).toFixed(2))
	
}

const proportion = (p,counts) =>{
	const total = count(counts)
	if(total == 0){return (0)}
	return((p/total).toFixed(2))
}

const StatisticsLine = ({text,value,end}) => {
	return( 
		<>
			<p> {text} : {value}  {end}</p>
		</>
	)

}

const Statistics = ({counts,scores}) => {

	scores = [scores.good, scores.neutral, scores.bad]
	counts = [counts.good, counts.neutral, counts.bad]

	const total = count(counts)
	if(total == 0) {return(<h1> No feedback yet </h1>)}

	return(
		<>
		<div>
		<table> 
		<tbody>
		<tr>
			<td><StatisticsLine text="Good" value={counts[0]} end=""/></td>
			<td><StatisticsLine text="Neutral" value={counts[1]} end=""/></td>
			<td><StatisticsLine text="Bad"  value={counts[2]} end=""/></td>
		</tr>
		</tbody>
		</table>
		</div>

		<div>
		<table>
		<tbody>
		<tr>
			<td>
				<StatisticsLine text="Total"  value={total}  end=""/>
			</td>
			<td>
				<StatisticsLine text="Punctuation"  value={punctuation(counts,scores)}  end=""/>
			</td>
			<td>
				<StatisticsLine text="Average" value={average(counts,scores)}  end=""/>
			</td>
		</tr>
		</tbody>
		</table>
		<table>
		<tbody>
			<tr><td>
				<StatisticsLine text="Positive proportion" value = {proportion( counts[0], counts)} end="%" /> 
			</td></tr>
			<tr><td>
				<StatisticsLine text="Neutral proportion"  value = {proportion( counts[1], counts)}  end="%"/> 
			</td></tr>
			<tr><td>
				<StatisticsLine text="Negative proportion" value = {proportion( counts[2], counts)}  end="%"/> 
			</td></tr>
		</tbody>
		</table>
		</div>
		</>
	)
}
const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	const counts  = {good: good, bad     : bad, neutral :neutral}
	const scores  = {good: 1, neutral : 0, bad :-1}

	return (
		<div>
			<Title />		
			<div>
				<button onClick = {() => setGood(good +1) }> Good </button>
				<button onClick = {() => setNeutral(neutral +1) }> Neutral </button>
				<button onClick = {() => setBad(bad +1) }> Bad </button>
			</div>
		<Statistics counts={counts} scores={scores}  />
		</div>
	)
	}
	
export default App
