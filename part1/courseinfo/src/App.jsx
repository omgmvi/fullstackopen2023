const Header = (props) => {
	return(
		<h1>
			{props.course.name}
		</h1>
	)
}

const PartX = (props) => {
	return(
		<p>
			{props.part} {props.count}
		</p>
	)
}

const Content = (props) => {
	const parts = props.contents.parts
	return(
		<>
		{parts.map((content) =>  (<PartX part={content.name} count={content.exercises} /> )) }
		</>
	)


}

const Total = (props) => {
	const parts = props.contents.parts
	var sum = 0
	parts.map((content) =>  { sum += content.exercises } )
return (
	<>
		<p>Number of exercises {sum}</p>
	</>
)

}
const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{ name: 'Fundamentals of React', exercises: 10},
		        { name: 'Using props to pass data',exercises: 7},
			{ name: 'State of a component',    exercises: 14}
		       ]
		}
	  return (
		 	<div>
		        	<Header course={course} />
		   		<Content contents={course} />
		   		<Total   contents={course} />
		      </div>
		    )
}

export default App
