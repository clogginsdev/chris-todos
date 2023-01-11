import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Task {
	task: string | number;
	importance: string | number;
}

export default function Home() {
	const [task, setTask] = useState<Task[]>([]);
	const [inputs, setInputs] = useState<Task>({
		task: "",
		importance: "",
	});

	const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setInputs({ ...inputs, [name]: value });
	};

	function addTaskToList() {
		setTask([...task, { task: inputs.task, importance: inputs.importance }]);
	}

	return (
		<>
			<Head>
				<title>Chris To-dos</title>
				<meta
					name='description'
					content='A simple to-do app to Practice Typescript!'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1 className='text-center'>
					My To-dos for {new Date().toLocaleDateString()}
				</h1>
				<div className='form-wrapper'>
					<input
						type='text'
						name='task'
						value={inputs.task}
						onChange={handleInputChange}
						placeholder='Add a task'
					/>
					<input
						type='text'
						name='importance'
						value={inputs.importance}
						onChange={handleInputChange}
						placeholder='How important is it?'
					/>
					<button onClick={() => addTaskToList()}>Add Task</button>
				</div>
				<div className='task-list'>
					{task.map((task) => (
						<div className='task-card' key={task.task}>
							<p>
								<strong>{task.task}</strong>
							</p>
							<em>{task.importance}</em>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
