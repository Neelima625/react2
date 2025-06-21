import React, { useState } from 'react';
import Navbar1 from './Navbar';
import Footer from './Footer';
import { 
  FiSearch, 
  FiPlus, 
  FiCheck, 
  FiUser, 
  FiCreditCard, 
  FiSmartphone, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX 
} from 'react-icons/fi';
import './payment.css';

const BeneficiaryList = () => {
  // State for beneficiary list
  const [searchQuery, setSearchQuery] = useState('');
  const [amounts, setAmounts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const beneficiariesPerPage = 10;

  // State for add beneficiary form
  const [formData, setFormData] = useState({
    mobileNumber: '',
    accountHolderName: '',
    accountNumber: '',
    txnType: '',
    bank: ''
  });

  // Sample beneficiary data
  const allBeneficiaries = [
    {
      id: 1,
      mobileNumber: '9985897012',
      name: 'GRANDHI GANGADARAM',
      accountNumber: '006901595021',
      ifscCode: 'KKBK0000958',
      verified: true
    },
    {
      id: 2,
      mobileNumber: '9876543210',
      name: 'AJAY KUMAR',
      accountNumber: '123456789012',
      ifscCode: 'HDFC0001234',
      verified: true
    },
    {
      id: 3,
      mobileNumber: '8765432109',
      name: 'PRIYA SHARMA',
      accountNumber: '234567890123',
      ifscCode: 'ICIC0005678',
      verified: false
    },
    {
      id: 4,
      mobileNumber: '7654321098',
      name: 'RAHUL VERMA',
      accountNumber: '345678901234',
      ifscCode: 'SBIN0009876',
      verified: true
    },
    {
      id: 5,
      mobileNumber: '6543210987',
      name: 'NEHA PATEL',
      accountNumber: '456789012345',
      ifscCode: 'AXIS0004567',
      verified: false
    },
    {
      id: 6,
      mobileNumber: '7432109876',
      name: 'VIKAS SINGH',
      accountNumber: '567890123456',
      ifscCode: 'UBIN0007654',
      verified: true
    },
    {
      id: 7,
      mobileNumber: '8321098765',
      name: 'ANJALI GUPTA',
      accountNumber: '678901234567',
      ifscCode: 'CNRB0003210',
      verified: true
    },
    {
      id: 8,
      mobileNumber: '9210987654',
      name: 'SANJAY MEHTA',
      accountNumber: '789012345678',
      ifscCode: 'BARB0006543',
      verified: false
    },
    {
      id: 9,
      mobileNumber: '8109876543',
      name: 'MEERA DESAI',
      accountNumber: '890123456789',
      ifscCode: 'YESB0009876',
      verified: true
    },
    {
      id: 10,
      mobileNumber: '7098765432',
      name: 'ARUN KHANNA',
      accountNumber: '901234567890',
      ifscCode: 'IOBA0002345',
      verified: false
    },
    {
      id: 11,
      mobileNumber: '8987654321',
      name: 'SWATI REDDY',
      accountNumber: '012345678901',
      ifscCode: 'KKBK0003456',
      verified: true
    },
    {
      id: 12,
      mobileNumber: '9876543211',
      name: 'RAJEEV MALHOTRA',
      accountNumber: '123456789012',
      ifscCode: 'HDFC0004567',
      verified: false
    },
    {
      id: 13,
      mobileNumber: '8765432101',
      name: 'KAVITA CHAUHAN',
      accountNumber: '234567890123',
      ifscCode: 'ICIC0005678',
      verified: true
    },
    {
      id: 14,
      mobileNumber: '7654321091',
      name: 'AMITABH TRIVEDI',
      accountNumber: '345678901234',
      ifscCode: 'SBIN0006789',
      verified: true
    },
    {
      id: 15,
      mobileNumber: '6543210981',
      name: 'SHWETA IYER',
      accountNumber: '456789012345',
      ifscCode: 'AXIS0007890',
      verified: false
    },
    {
      id: 16,
      mobileNumber: '7432109871',
      name: 'DEEPAK NAIR',
      accountNumber: '567890123456',
      ifscCode: 'UBIN0008901',
      verified: true
    },
    {
      id: 17,
      mobileNumber: '8321098761',
      name: 'POOJA MENON',
      accountNumber: '678901234567',
      ifscCode: 'CNRB0009012',
      verified: false
    },
    {
      id: 18,
      mobileNumber: '9210987651',
      name: 'VIJAY SHETTY',
      accountNumber: '789012345678',
      ifscCode: 'BARB0000123',
      verified: true
    },
    {
      id: 19,
      mobileNumber: '8109876541',
      name: 'ANITA RAO',
      accountNumber: '890123456789',
      ifscCode: 'YESB0001234',
      verified: true
    },
    {
      id: 20,
      mobileNumber: '7098765431',
      name: 'SURESH PILLAI',
      accountNumber: '901234567890',
      ifscCode: 'IOBA0002345',
      verified: false
    }
  ];

  
  const filteredBeneficiaries = allBeneficiaries.filter(beneficiary =>
    beneficiary.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    beneficiary.mobileNumber.includes(searchQuery)
  );

 
  const indexOfLastBeneficiary = currentPage * beneficiariesPerPage;
  const indexOfFirstBeneficiary = indexOfLastBeneficiary - beneficiariesPerPage;
  const currentBeneficiaries = filteredBeneficiaries.slice(
    indexOfFirstBeneficiary,
    indexOfLastBeneficiary
  );

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle amount input change
  const handleAmountChange = (id, value) => {
    setAmounts(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // For demo purposes, let's add the new beneficiary to our list
    const newBeneficiary = {
      id: allBeneficiaries.length + 1,
      mobileNumber: formData.mobileNumber,
      name: formData.accountHolderName,
      accountNumber: formData.accountNumber,
      ifscCode: '', // You might want to add this field to your form
      verified: false
    };
    
    allBeneficiaries.unshift(newBeneficiary);
    
    // Close modal and reset form
    setShowAddModal(false);
    setFormData({
      mobileNumber: '',
      accountHolderName: '',
      accountNumber: '',
      txnType: '',
      bank: ''
    });
    
    
    setCurrentPage(1);
  };

  return (
    <><Navbar1></Navbar1>
    <div className="beneficiary-container">
        
      <header className="beneficiary-header">
        <h1>Beneficiary List</h1>
        <button 
          className="add-beneficiary-btn"
          onClick={() => setShowAddModal(true)}
        >
          <FiPlus /> Add Beneficiary
        </button>
      </header>

      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search beneficiaries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="beneficiary-list">
        {currentBeneficiaries.length > 0 ? (
          currentBeneficiaries.map(beneficiary => (
            <div key={beneficiary.id} className="beneficiary-card">
              <div className="beneficiary-info">
                <div className="beneficiary-name">
                  <FiUser className="icon" />
                  <span>{beneficiary.name}</span>
                  {beneficiary.verified && (
                    <span className="verified-badge">
                      <FiCheck /> Verified
                    </span>
                  )}
                </div>
                
                <div className="beneficiary-detail">
                  <FiSmartphone className="icon" />
                  <span>{beneficiary.mobileNumber}</span>
                </div>
                
                <div className="beneficiary-detail">
                  <FiCreditCard className="icon" />
                  <span>Account: {beneficiary.accountNumber}</span>
                </div>
                
                {beneficiary.ifscCode && (
                  <div className="beneficiary-detail">
                    <span className="ifsc-label">IFSC:</span>
                    <span className="ifsc-code">{beneficiary.ifscCode}</span>
                  </div>
                )}
              </div>

              <div className="amount-section">
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amounts[beneficiary.id] || ''}
                  onChange={(e) => handleAmountChange(beneficiary.id, e.target.value)}
                  className="amount-input"
                />
                <button className="pay-btn">Pay</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            No beneficiaries found matching your search.
          </div>
        )}
      </div>

      {filteredBeneficiaries.length > beneficiariesPerPage && (
        <div className="pagination">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className="page-nav"
          >
            <FiChevronLeft /> Prev
          </button>
          
          {Array.from({ 
            length: Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage) 
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === Math.ceil(filteredBeneficiaries.length / beneficiariesPerPage)}
            className="page-nav"
          >
            Next <FiChevronRight />
          </button>
        </div>
      )}

      <div className="charges-section">
        <div className="charge-item">
          <span>Pay Out Charges:</span>
          <span>₹15</span>
        </div>
        <div className="charge-item">
          <span>Account Verification:</span>
          <span>₹5</span>
        </div>
      </div>

      {/* Add Beneficiary Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="add-beneficiary-modal">
            <div className="modal-header">
              <h2>Add Beneficiary</h2>
              <button 
                className="close-modal"
                onClick={() => setShowAddModal(false)}
              >
                <FiX />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="accountHolderName">Account Holder Name</label>
                <input
                  type="text"
                  id="accountHolderName"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  placeholder="Enter account holder name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="accountNumber">Account Number</label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  placeholder="Enter account number"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="txnType">TXN Type</label>
                <select
                  id="txnType"
                  name="txnType"
                  value={formData.txnType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">--Select--</option>
                  <option value="IMPS">IMPS</option>
                  
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="bank">Select Bank</label>
                <select
                  id="bank"
                  name="bank"
                  value={formData.bank}
                  onChange={handleInputChange}
                  required
                >
                  <option disabled>Select a bank</option>
      <option value="AUSAMML">A U SAMML FINANCE BANK</option>
      <option value="ADARASH">ADARASH CO-OP URBAN BANK</option>
      <option value="AIRTEL">AIRTEL PAYMENTS BANK</option>
      <option value="AXIS">AXIS BANK</option>
      <option value="BANDHAN">BANDHAN BANK</option>
      <option value="BOA">BANK OF AMERICA</option>
      <option value="BOB">BANK OF BARODA</option>
      <option value="BOI">BANK OF INDIA</option>
      <option value="BOM">BANK OF MAHARASHTRA</option>
      <option value="CANARA">CANARA BANK</option>
      <option value="CENTRAL">CENTRAL BANK OF INDIA</option>
      <option value="CITI">CITI BANK</option>
      <option value="CUB">CITY UNION BANK</option>
      <option value="COSMOS">COSMOS BANK</option>
      <option value="DANALAXMI">DANALAXMI BANK</option>
      <option value="DBS">DBS BANK</option>
      <option value="EQUITAS">EQUITAS SMALL FINANCE BANK</option>
      <option value="FEDERAL">FEDERAL BANK</option>
      <option value="FINO">FINO PAYMENTS BANK</option>
      <option value="HDFC">HDFC BANK</option>
      <option value="HSBC">HSBC BANK</option>
      <option value="ICICI">ICICI BANK</option>
      <option value="IDBI">IDBI BANK</option>
      <option value="IDFC">IDFC FIRST BANK</option>
      <option value="IPPB">INDIA POST PAYMENTS BANK</option>
      <option value="INDIAN">INDIAN BANK</option>
      <option value="IOB">INDIAN OVERSEAS BANK</option>
      <option value="INDU">INDU SIND BANK</option>
      <option value="JIO">JIO PAYMENTS BANK</option>
      <option value="KARNATAKA">KARNATAKA BANK</option>
      <option value="KVB">KARUR VYSYA BANK</option>
      <option value="KOTAK">KOTAK MAHINDRA BANK</option>
      <option value="LVB">LAKSHMI VILAS BANK</option>
      <option value="PNB">PUNJAB NATIONAL BANK</option>
      <option value="SOUTHINDIAN">SOUTH INDIAN BANK</option>
      <option value="SCB">STANDARD CHARTERED BANK</option>
      <option value="SBI">STATE BANK OF INDIA</option>
      <option value="TGB">TELANGANA GRAMEENA BANK</option>
      <option value="APGAYATRI">THE AP GAYATRI CO-OP URBAN BANK</option>
      <option value="APMAHESH">THE AP MAHESH CO-OP URBAN BANK</option>
      <option value="UNIONCOOP">THE UNION CO-OP BANK</option>
      <option value="UCO">UCO BANK</option>
      <option value="UNION">UNION BANK OF INDIA</option>
      <option value="VCCB">VIJAY COMMERCIAL CO-OP BANK</option>
      <option value="YES">YES BANK</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
  
    </div>
        <Footer></Footer></>
  );
};

export default BeneficiaryList;