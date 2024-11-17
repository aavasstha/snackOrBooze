import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import SnackOrBoozeApi from './Api';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import './AddItemForm.css';
const AddItemForm = () => {
    const [formData, setFormData] = useState({
        type: "",
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: ""
    });


    const history = useHistory();
    const params = useParams("type");

    // Handle form data change
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            id: value.toLowerCase(),
            [name]: value
        }));
    }

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault();

        // Set the id to the lowercase version of the name
        const newSnack = {
            id: formData.name.toLowerCase().replace(/\s+/g, "-"),
            name: formData.name,
            description: formData.description,
            recipe: formData.recipe,
            serve: formData.serve
        };
        try {
            await SnackOrBoozeApi.addItem(params.type.toLowerCase(), newSnack);
            history.push(`/${params.type}`); // Redirect to the snacks page after adding
        } catch (error) {
            console.error(`Error adding ${params.type}:`, error);
        }


    }

    return (
        <Container className="col-md-6 my-4">
            <Form onSubmit={handleSubmit} className="add-item-form">
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="recipe">Recipe</Label>
                    <Input
                        type="text"
                        name="recipe"
                        id="recipe"
                        placeholder="Enter details"
                        value={formData.recipe}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="serve">Serve</Label>
                    <Input
                        type="text"
                        name="serve"
                        id="serve"
                        placeholder="How to serve?"
                        value={formData.serve}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <Button color="primary" type="submit" block>
                    Add {params.type === "Snacks" ? "Snack" : "Drink"}
                </Button>
            </Form>
        </Container>
    );
};

export default AddItemForm;
