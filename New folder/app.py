from flask import Flask, request, jsonify, render_template
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.utils import to_categorical
from sklearn.model_selection import train_test_split
app = Flask(__name__)

# Load the trained LSTM model
model = load_model('istm_model.h5')

# Define label encoders
label_encoders = {}
def process(data):
        df = pd.read_csv(data)
        # columns_to_drop = ['testResultMetricTimestamp2', 'testResultMetricTimestamp1', 'Unnamed: 19']
        # df=df.drop(columns=columns_to_drop)
        # label_encoder=LabelEncoder()
        # # Apply label encoding to 'participantSex' column
        # df['participantSex_encoded'] = label_encoder.fit_transform(df['participantSex'])

        # # Apply label encoding to 'participantIsControl' column
        # df['participantIsControl_encoded'] = label_encoder.fit_transform(df['participantIsControl'])

        # # Apply label encoding to 'participantCountryOfResidence' column
        # df['participantCountry_encoded'] = label_encoder.fit_transform(df['participantCountryOfResidence'])
        # values=['floodlightOpenId','testResultMetricId']
        # df=df.drop(columns=values)
        # values=['participantIsControl','participantSex','participantCountryOfResidence']
        # df=df.drop(columns=values)
        # #Calculate the age using 'participantBirthYear'
        # current_year = pd.Timestamp.now().year
        # df['participantAge'] = current_year - df['participantBirthYear']
        # # Handling DateTime Data
        # # Convert 'participantCreatedOn_UTC' to datetime format
        # df['participantCreatedOn'] = pd.to_datetime(df['participantCreatedOn'])

        # # Extract year, month, and day from the datetime column
        # df['created_year'] = df['participantCreatedOn'].dt.year
        # df['created_month'] = df['participantCreatedOn'].dt.month
        # df['created_day'] = df['participantCreatedOn'].dt.day
        # #Task Duration Analysis
        # # Convert 'testStartedAt' and 'testEndedAt' to datetime format
        # df['testStartedAt'] = pd.to_datetime(df['testStartedAt'])
        # df['testEndedAt'] = pd.to_datetime(df['testEndedAt'])

        # # Calculate the duration of each test/task in seconds
        # df['taskDuration'] = (df['testEndedAt'] - df['testStartedAt']).dt.total_seconds()
        # # Time Variation in Activity Performance
        # # Convert 'testStartedAt' and 'testEndedAt' to datetime format
        # df['testStartedAt'] = pd.to_datetime(df['testStartedAt'])
        # df['testEndedAt'] = pd.to_datetime(df['testEndedAt'])

        # # Calculate the task duration in seconds
        # df['taskDuration'] = (df['testEndedAt'] - df['testStartedAt']).dt.total_seconds()

        # # Group by 'participantIsControl' and time period (e.g., day, week)
        # time_period = 'D'  # You can change this to 'W' for week or other appropriate values
        # grouped = df.groupby(['participantIsControl_encoded', pd.Grouper(key='testStartedAt', freq=time_period)])

        # # Calculate mean task duration for each group and time period
        # mean_durations = grouped['taskDuration'].mean().reset_index()
        # # Calculate BMI using participantWeightLbs and participantHeightCms
        # # Convert height to meters and weight to kilograms
        # df['BMI'] = (df['participantWeightLbs'] * 0.453592) / ((df['participantHeightCms'] / 100) ** 2)
        # # Categorize BMI ranges
        # def categorize_bmi(bmi):
        #     if bmi < 18.5:
        #         return 'Underweight'
        #     elif 18.5 <= bmi < 25:
        #         return 'Normal Weight'
        #     elif 25 <= bmi < 30:
        #         return 'Overweight'
        #     else:
        #         return 'Obese'

        # df['BMICategory'] = df['BMI'].apply(categorize_bmi)
        # # Calculate BMI using participantWeightLbs and participantHeightCms
        # # Convert height to meters and weight to kilograms
        # df['BMI'] = (df['participantWeightLbs'] * 0.453592) / ((df['participantHeightCms'] / 100) ** 2)
        # # Categorize BMI ranges
        # def categorize_bmi(bmi):
        #     if bmi < 18.5:
        #         return 'Underweight'
        #     elif 18.5 <= bmi < 25:
        #         return 'Normal Weight'
        #     elif 25 <= bmi < 30:
        #         return 'Overweight'
        #     else:
        #         return 'Obese'

        # df['BMICategory'] = df['BMI'].apply(categorize_bmi)
        # values=['participantCreatedOn','participantBirthYear','testStartedAt','testEndedAt']
        # df=df.drop(columns=values)

        # # Select the numerical columns
        # numerical_columns = df.select_dtypes(include=['float64', 'int64']).columns

        # # Loop through each numerical column in the DataFrame
        # for column in numerical_columns:
        # # Calculate the first quartile (Q1) and third quartile (Q3)
        #     Q1 = df[column].quantile(0.25)
        #     Q3 = df[column].quantile(0.75)

        #     # Calculate the interquartile range (IQR)
        #     IQR = Q3 - Q1

        #     # Define lower and upper bounds to identify outliers
        #     lower_bound = Q1 - 1.5 * IQR
        #     upper_bound = Q3 + 1.5 * IQR

        #     # Replace outliers with values at specified percentiles
        #     df[column] = np.where(df[column] < lower_bound, np.percentile(df[column], 5), df[column])
        #     df[column] = np.where(df[column] > upper_bound, np.percentile(df[column], 95), df[column])
        # values =['testMetricName','testMetricCode' ,'testResultMetricCreatedOn' ]
        # df=df.drop(columns=values)
        # # Select the categorical columns
        # categorical_columns = ['BMICategory', 'testName', 'testCode']
        # # Perform one-hot encoding
        # df = pd.get_dummies(df, columns=categorical_columns, drop_first=True)
        # List of columns to scale
        columns_to_scale = ['participantWeightLbs', 'participantHeightCms', 'participantAge', 'created_year', 'created_month', 'created_day', 'taskDuration', 'BMI']

        # Create a StandardScaler instance
        scaler = StandardScaler()

        # Fit and transform the scaler on the training data
        df[columns_to_scale] = scaler.fit_transform(df[columns_to_scale])

        # Transform the testing data using the same scaler

        # Prepare the features and target for training
        df = df.drop(columns=['participantIsControl_encoded'])  

        # Prepare the features and target for testing

        # Convert input data to float32
        df = df.astype('float32')
        # Reshape input data for LSTM (assuming df and X_test are 2D arrays)
        df = df.values.reshape(df.shape[0], df.shape[1], 1)
        return df

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if a CSV file is included in the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})

        file = request.files['file']

        # Check if the file has an allowed extension (e.g., CSV)
        allowed_extensions = {'csv'}
        if '.' not in file.filename or file.filename.split('.')[-1].lower() not in allowed_extensions:
            return jsonify({'error': 'Invalid file format'})
        
        
        # Read the CSV file and process it
        prodata = process(file)
        pdata = np.array(prodata)
        predictions = model.predict(pdata)
        binary_predictions = (predictions > 0.5).astype(int)
        tf.config.run_functions_eagerly(True)
        return render_template('index.html', prediction_results=binary_predictions)
    except Exception as e:
        return jsonify({'error': f'Prediction error: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True , port=4000)
