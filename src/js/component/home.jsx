import React, {useState} from 'react'

const Home = () => {
	const [inputValue, setInputValue] = useState('')
	const [todos, setTodos] = useState([])

	return (
		<div className='container'>
			<h1> todos </h1>
			<ul>
				<li>
					<input type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							setTodos(todos.concat([inputValue]))
							setInputValue('')
						}
					}}
					placeholder="Add a task"
					/>
				</li>

				{todos.map((item, index) => (
					<li>
						{item}{''}
						<i
							class='fas fa-trash-alt' onClick={() =>
							setTodos(
								todos.filter(
									(t, currentIndex) => index != currentIndex //thanks t, yoou are the best letter that's out there
								)
							)}></i>
					</li>

				))}
			</ul>
			<p></p>
			<div>{ todos.length } item left</div>
		</div>
	)
}

export default Home


//posdata: Creo que estoy olvidando algo, pero de resto creo que esta muy bien../