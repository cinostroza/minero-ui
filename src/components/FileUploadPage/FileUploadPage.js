import React from 'react';
import {useMutation} from "@apollo/client";
import {UPLOAD_FILE} from "../../helpers/gpl_queries";


const FileUploadPage = (props) => {
    const [mutate, { loading, error, data }] = useMutation(UPLOAD_FILE);
    const onChange = ({
                          target: {
                              validity,
                              files: [file]
                          }
                      }: any) => validity.valid && mutate({ variables: { file } });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
    if (data) props.onFileUpload(data)

    return (
        <React.Fragment>
            <input type="file" required onChange={onChange} />
        </React.Fragment>
    );
};

export default FileUploadPage
