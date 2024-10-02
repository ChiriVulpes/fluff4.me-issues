import Component from "ui/Component"
import Button from "ui/component/Button"

interface CheckboxExtensions {
	isChecked (): boolean
	setChecked (checked: boolean): this
}

interface Checkbox extends Button, CheckboxExtensions { }

const Checkbox = Component.Builder("label", (component): Checkbox => {

	const input = Component("input")
		.style("checkbox-input")
		.attributes.set("type", "checkbox")

	return component
		.and(Button)
		.style("checkbox")
		.attributes.set("tabindex", "0")
		.append(input)
		.extend<CheckboxExtensions>({
			isChecked (this: Checkbox) {
				return (this.element as HTMLInputElement).checked
			},
			setChecked (this: Checkbox, checked: boolean) {
				(this.element as HTMLInputElement).checked = true
				return this
			},
		})
		.event.subscribe("click", event => {
			event.preventDefault()
		})
})

export default Checkbox