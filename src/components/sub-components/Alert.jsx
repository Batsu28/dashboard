import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Alert(prop) {
	const [modalShow, setModalShow] = useState(false);
	const { setval, val } = prop;

	function addSpec(e) {
		e.preventDefault();
		if (e.target.label.value !== "" || e.target.spec.value !== "") {
			setval([...val, [e.target.spec.value, e.target.label.value]]);
		}
		console.log(e.target.label.value);
		console.log(e.target.spec.value);
	}
	return (
		<>
			<Button
				variant="primary"
				onClick={() => setModalShow(true)}>
				Launch vertically centered modal
			</Button>
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={modalShow}>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={addSpec}>
						<input
							type="text"
							name="label"
						/>
						<input
							type="text"
							name="spec"
						/>
						<button
							type="submit"
							onClick={() => setModalShow(false)}>
							ADD
						</button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setModalShow(false)}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
