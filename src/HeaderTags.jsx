import React from 'react';

function HeaderTags(props) {
    return (
        <div>
            CustomerName<input type='text' name='customerName' placeholder='Enter CustomerName'/>
            InvoiceId<input type='text' name='invoice id' placeholder='Enter Invoice Id'/>
            Start Date<input type='text' name='Start Id' placeholder='Start Date'/>
            End Date<input type='text' name='End Id' placeholder='End Date'/>
        </div>
    );
}

export default HeaderTags;