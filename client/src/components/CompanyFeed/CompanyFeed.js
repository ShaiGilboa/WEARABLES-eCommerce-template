import React from 'react';
import styled from 'styled-components';
import { useParams, } from 'react-router-dom';

const CompanyFeed = () => {
  const { companyId } = useParams();
  const [company, setCompany] = React.useState(null);
  let comp;
  React.useEffect(() => {
    fetch(`/companies/${companyId}`)
      .then(res => res.json())
      .then(data => setCompany(data))
  }, [companyId])

  if (company && company.company) {
    comp = company.company;
  }

  return (
    <>
      {company && company.company ? (
        <>
        <div>{comp.name}</div>
        <div>{comp.url}</div>
        <div>{comp.country}</div>
        <div>{comp.id}</div>
        </>
      ) : (
        <div> how's it going </div>
      )}
    </>
  );
}

export default CompanyFeed;