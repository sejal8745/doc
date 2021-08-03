import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
function Header() {
  return (
    <div className="flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3x1" />
      </Button>
      <Icon name="description" size="5x1" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2x1">Docs</h1>

      <div
        className="mx-5 md:mx-20 flex flex-grow 
      items-center px-5 py-2 bg-gray-100 text-gray-600 
      rounded-lg focus-within:text-gray-600 
      focus-within:shadow-md"
      >
        <Icon name="search" size="3x1" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 bg-transparent text-base outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3x1" />
      </Button>

      <img
        loading="lazy"
        className="cursor-pointer h-12 v-12 rounded-full ml-2"
        src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt=""
      />
    </div>
  );
}

export default Header;
