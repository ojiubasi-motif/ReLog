/* eslint-disable react/prop-types */

const BtnDropdown = (props) => {
  return (
    <ul className="dropdown-menu" aria-labelledby={props.targetId}>
      <li>Drop1</li>
      <li>Drop2</li>
      <li>Drop3</li>
    </ul>
  )
}

export default BtnDropdown