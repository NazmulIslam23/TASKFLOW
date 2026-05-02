const validStatus = ["To Do", "In Progress", "Completed"];

const validateTask = (data, isUpdate = false) => {
    const errors = [];

    if (!isUpdate && (!data.title || data.title.trim() === "")) {
        errors.push("Title required");
    }

    if (data.status && !validStatus.includes(data.status)) {
        errors.push("Invalid status value");
    }

    return errors;
};

module.exports = { validateTask };