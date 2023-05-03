import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa'

const Blog = () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        document.title = 'Recipes BD | Blog'
    }, [])

    const downloadPDF = () => {
        const capture = document.querySelector('.blog');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('blogs.pdf');
        })
    }
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-row-reverse'>
                <button
                    className="btn btn-warning flex items-center gap-2"
                    onClick={downloadPDF}
                    disabled={!(loader === false)}
                >
                    {loader ? (
                        <span>Downloading</span>
                    ) : (
                        <>PDF <FaDownload /></>
                    )}

                </button>
            </div>

            <div className="section-headr text-center mb-9">
                <h2 className="section-title text-4xl font-bold m-0 mb-4">Blog</h2>
                <p className="text-lg m-0">This is our blog page abuout recent</p>
            </div>
            <div className="mx-auto max-w-3xl px-8 py-4 blog">
                <div className="border-b border-gray-500 mb-5 py-3">
                    <h2 className='font-bold text-xl'>Tell us the differences between uncontrolled and controlled components</h2>
                    <p>
                        Controlled components have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </p>
                </div>
                <div className="border-b border-gray-500 mb-5 py-3">
                    <h2 className='font-bold text-xl'>How to validate React props using PropTypes</h2>
                    <p>
                        propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning.
                    </p>
                </div>
                <div className="border-b border-gray-500 mb-5 py-3">
                    <h2 className='font-bold text-xl'>Tell us the difference between nodejs and express js</h2>
                    <p>
                        NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.
                    </p>
                </div>
                <div className="border-b-0 border-gray-500 mb-5 py-3">
                    <h2 className='font-bold text-xl'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p>
                        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;