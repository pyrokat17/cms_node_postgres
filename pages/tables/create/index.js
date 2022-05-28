import React from "react";
import Layout from "@/components/layout/Layout";
import { Button, Form, Label, Segment } from "semantic-ui-react";
export default function TableCreatePage() {
	return (
		<Layout>
			<Segment inverted attached>
				<Form inverted>
					<Form.Input label="Table Name" />

					<Button
						icon="plus"
						content="Add Row"
						labelPosition="right"
						inverted
						color="green"
					/>
				</Form>
				<hr />
				<Button
					inverted
					color="blue"
					content="Create Table"
					attached="bottom"
				/>
			</Segment>
		</Layout>
	);
}
