document.getElementById('inspectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formDetails = {};
    
    formData.forEach((value, key) => {
        formDetails[key] = value;
    });

    console.log('Form Submitted:', formDetails);

    alert('Inspection form submitted successfully!');
});