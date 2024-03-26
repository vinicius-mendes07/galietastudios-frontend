import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../../components/Modal';
import PageHeader from '../../../components/Panel/PageHeader';

import { Card, Container } from './styles';

import delay from '../../../utils/delay';
import toast from '../../../utils/toast';

import trash from '../../../assets/images/icons/trash.svg';
import EmptyList from '../../../components/EmptyList';
import ErrorContainer from '../../../components/ErrorContainer';
import ServicesService from '../../../services/ServicesService';
import Loader from '../../../components/Loader';

export default function Services() {
  const [services, setServices] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [serviceBeingDeleted, setServiceBeingDeleted] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const loadServices = useCallback(async () => {
    try {
      setIsLoadingServices(true);
      const servicesList = await ServicesService.listServices();

      setServices(servicesList);
      setHasError(false);
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
      }

      setServices([]);
      setHasError(true);
    } finally {
      setIsLoadingServices(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadServices();
  }, [loadServices]);

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  const handleOpenDeleteServiceModal = useCallback((service) => {
    setServiceBeingDeleted(service);
    setIsModalVisible(true);
  }, []);

  async function handleDeleteService() {
    try {
      setIsLoadingModal(true);
      await delay(1000);
      await ServicesService.deleteService(serviceBeingDeleted.id);

      setServices((prevState) => prevState.filter(
        (service) => service.id !== serviceBeingDeleted.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Serviço excluído com sucesso!',
      });
    } catch (error) {
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }
      if (error?.response?.data?.error === 'There are schedules in this service') {
        toast({
          type: 'danger',
          text: 'Erro ao excluir serviço. Existem agendamentos marcados com ele!',
        });
        return;
      }
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao excluir o serviço!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

  const hasServices = services.length > 0;
  const isListEmpty = !hasError && !isLoadingServices && !hasServices;
  return (
    <Container>
      <Loader isLoading={isLoadingServices} />
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
                  onClick={() => handleOpenDeleteServiceModal(service)}
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

        {isListEmpty && <EmptyList text="Nenhum serviço encontrado." />}

        {hasError && (
          <ErrorContainer
            text="Erro ao carregar os serviços"
            onTryAgain={loadServices}
          />
        )}
      </div>
    </Container>
  );
}
