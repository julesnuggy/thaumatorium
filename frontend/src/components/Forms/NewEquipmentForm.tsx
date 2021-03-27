import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Equipment } from '../../models/Equipment';
import { EquipmentType, ProductType } from '../../enums/products';

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: Equipment) => void;
}

const EquipmentTypeOptions = () => {
  const options = [<option placeholder="Select one..." selected disabled value="">Select one...</option>];
  for (const type in EquipmentType) {
    options.push(<option>{type}</option>)
  }

  return (
    <>{options}</>
  );
}

export const NewEquipmentForm = ({ onSubmit }: FormProps) => {
  const titleRef = React.createRef();
  const initialValues: Equipment = ({ title: '', description: '', type: ProductType.EQUIPMENT, equipmentType: '', imageName: '', stock: 0 });

  const handleSubmit = async (values: Equipment, { resetForm }) => {
    await onSubmit(values);
    resetForm();
    titleRef.current?.focus();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form} title="Add New Equipment" name="newEquipment">
          <b>Add New Equipment</b>
          <div className={styles.formItem}>
            <label htmlFor="title">Title</label>
            <Field name="title" title="title" innerRef={titleRef} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Description</label>
            <Field name="description" title="Description" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="equipmentType">Type</label>
            <Field name="equipmentType" title="Type" as="select">
              <EquipmentTypeOptions />
            </Field>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="imageName">Image Name</label>
            <Field name="imageName" title="Image Name" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="stock">Stock</label>
            <Field name="stock" title="Stock" />
          </div>
          <div className={styles.formSubmit}>
            <button type="submit">Submit New Equipment</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
