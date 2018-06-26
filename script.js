var person = new Backbone.Model ({
    id: 1,
    title: "Miss",
    name: "Steph",
    surname: "Barden",
    dob: "06-03-1999",
    adult: true,
    address: {
        line1: "44 Charleston Road",
        line2: "",
        city: "Eastbourne",
        county: "East Sussex",
        postcode: "BN21 1SF",
        country: "England"
    }
})

new Backbone.Form({
    el: "#form",
    model: person,
    fields: [
        {name: "id", label: "ID", control: "uneditable-input"},
        {name: "title", label: "Title", control: "radio", options: [
            {label: "Mr.", value: "Mr"},
            {label: "Mrs.", value: "Mrs"},
            {label: "Miss.", value: "Miss"},
            {label: "Dr.", value: "Dr"}]},
        {name: "name", label: "First Name", control: "input"},
        {name: "surname", label: "Last Name", control: "input"},
        {control: "spacer"},
        {name: "dob", label: "Date of Birth", control: "datepicker", options: {format: "dd-mm-yyyy"}},
        {name: "adult", label: "Over 18?", control: "checkbox"},
        {control: "spacer"},
        {name: "address.line1", label: "Address Line 1", control: "input"},
        {name: "address.line2", label: "Address Line 2", control: "input"},
        {name: "address.city", label: "City", control: "input"},
        {name: "address.county", label: "County", control: "input"},
        {name: "address.postcode", label: "Postcode", control: "input"},
        {name: "address.country", label: "Country", control: "input"},
        {control: "button", label: "Save"}
        ]
}).render();
