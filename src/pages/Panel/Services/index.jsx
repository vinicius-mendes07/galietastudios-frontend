import { useCallback, useState } from 'react';

import Modal from '../../../components/Modal';
import PageHeader from '../../../components/Panel/PageHeader';

import { Card, Container } from './styles';

import delay from '../../../utils/delay';
import toast from '../../../utils/toast';

import trash from '../../../assets/images/icons/trash.svg';

export default function Services() {
  const [services, setServices] = useState([
    { id: `${Math.random()}`, service_type: 'Barba', duration: 30 },
    { id: `${Math.random()}`, service_type: 'Cabelo', duration: 30 },
    { id: `${Math.random()}`, service_type: 'Cabelo e Barba', duration: 60 },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [serviceBeingDeleted, setServiceBeingDeleted] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(null);

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  const handleOpenDeleteCanceledDayModal = useCallback((service) => {
    setServiceBeingDeleted(service);
    setIsModalVisible(true);
  }, []);

  async function handleDeleteService() {
    try {
      setIsLoadingModal(true);
      await delay(1000);
      // await ContactsService.deleteContact(contactBeingDeleted.id);

      setServices((prevState) => prevState.filter(
        (service) => service.id !== serviceBeingDeleted.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Serviço excluído com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao excluir o serviço!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

  const hasServices = services.length > 0;
  return (
    <Container>
      <PageHeader
        title="Serviços"
        buttonLabel="Novo Serviço"
        path="/panel/services/new"
      />

      <div className="page-body">
        {hasServices && (
        <>
          {services.map((service) => (
            <Card key={service.id}>
              <div className="info">
                <strong>{service.service_type}</strong>

                <p>{service.duration} minutos</p>
              </div>
              <div className="actions">
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleOpenDeleteCanceledDayModal(service)}
                >
                  <img src={trash} alt="delete" />
                </button>
              </div>

            </Card>
          ))}
          <Modal
            danger
            visible={isModalVisible}
            isLoading={isLoadingModal}
            title={`Tem certeza que deseja excluir o serviço "${serviceBeingDeleted?.service_type}"?`}
            confirmLabel="Excluir"
            onCancel={handleCloseModal}
            onConfirm={handleDeleteService}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
        )}
      </div>
    </Container>
  );
}
