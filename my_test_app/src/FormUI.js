function FormUI({ form }) {
    function renderInputField(property) {
      const { type, title, name, value, required, onChange, disabled, placeholder, min, options } = property;
      
      switch (type) {
        case "input":
          return (
            <input
              type="text"
              title={title}
              name={name}
              value={value}
              required={required}
              onChange={onChange ? () => eval(onChange) : null}
              disabled={disabled}
              placeholder={placeholder}
              minLength={min}
            />
          );
        case "number":
          return (
            <input
              type="number"
              title={title}
              name={name}
              min={min}
            />
          );
        case "password":
          return (
            <input
              type="password"
              title={title}
              name={name}
              minLength={min}
            />
          );
        case "select":
          return (
            <select title={title} name={name}>
              {Object.keys(options).map((optionKey) => (
                <option key={optionKey} value={optionKey}>
                  {options[optionKey]}
                </option>
              ))}
            </select>
          );
        case "submit":
          return (
            <input
              type="submit"
              title={title}
              name={name}
              value={title}
            />
          );
        default:
          return null;
      }
    }
  
    return (
      <form name={form.name} title={form.title} description={form.description} method={form.method} action={form.action}>
        {Object.values(form.properties).map((property, index) => (
          <div key={index}>
            <label>{property.title}</label>
            {renderInputField(property)}
          </div>
        ))}
      </form>
    );
}
  
export default FormUI;