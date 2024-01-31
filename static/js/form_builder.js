// Helper function to create a unique identifier for each field
function generateFieldId(type) {
    return type + '_' + Date.now();
}

function addField(type) {
    const form = document.getElementById('custom-form');
    let field;

    switch (type) {
        case 'text':
            field = createTextField();
            break;
        case 'checkbox':
            field = createCheckboxField();
            break;
        // Add cases for other field types
    }

    field.id = generateFieldId(type);
    form.appendChild(field);
}

function createTextField() {
    let field = document.createElement('input');
    field.type = 'text';
    field.placeholder = 'Enter Text';
    return field;
}

function createCheckboxField() {
    let field = document.createElement('input');
    field.type = 'checkbox';
    return field;
}

function removeField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.remove();
    }
}

function updateField(fieldId, properties) {
    const field = document.getElementById(fieldId);
    if (field) {
        // Update properties like field.placeholder, field.value, etc.
    }
}

function saveForm() {
    const form = document.getElementById('custom-form');
    const fields = form.elements;
    let formConfig = [];

    for (let field of fields) {
        let fieldConfig = {
            type: field.type,
            id: field.id,
            // Add other properties you need to save
        };
        formConfig.push(fieldConfig);
    }

    // Here, send formConfig to the server
    // For example, using fetch() or XMLHttpRequest
}

// Example usage in HTML:
// <button onclick="addField('text')">Add Text Input</button>
// <button onclick="removeField('text_123456')">Remove Field</button>
