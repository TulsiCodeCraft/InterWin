# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


{data.resources.map((resource, i) => (
              <li key={i} className="mb-2">
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {resource.title}
                </a>
              </li>
            ))}
