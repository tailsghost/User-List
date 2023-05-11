import { useEffect, useState } from 'react';
import './index.scss';
import Success from './components/Success';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://reqres.in/api/users');
        const data = await res.json();
        setUsers(data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [searchValue]);

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          setSearchValue={onSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          setSuccess={setSuccess}
        />
      )}
    </div>
  );
}

export default App;
