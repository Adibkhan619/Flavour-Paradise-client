

const NavBar2 = () => {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.23/dist/full.min.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com/3.4.0"></script>

<div tabIndex="0" className="collapse collapse-open border border-base-300 bg-red-200 !overflow-visible">
  <div className="collapse-title text-xl font-medium">
    I have collapse-open className
  </div>
  <div className="collapse-content">
    <details className="dropdown">
      <summary className="m-1 btn">open or close</summary>
      <ul className="p-2 shadow menu dropdown-content z-[99] bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
  </div>
</div>
        </div>
    );
};

export default NavBar2;